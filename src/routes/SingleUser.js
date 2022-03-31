import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';  
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


export default function SingleUser() {

  const params = useParams();
  
  const [repoData, setRepoData] = useState();
  const [page, setPage] = useState(1);
  const [rootList, setRootList] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const handleOnScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("at bottom");
      setPage(prev => prev+1);
    }
  }

  useEffect(() => {
    
    fetch("https://api.github.com/users/"+params.userName+"/repos?per_page=10&page="+[page])
      .then((res) => res.json())
      .then(
        (result) => {
          const list = result.map((item) => (
            <Link to={"/users/" + params.userName + "/repos/" + item.name} key={item.id}>
            <div className="single-repos">
              <p><span className="strong">repository.name：</span>{item.name}</p>
              <p><span className="strong">repository.stargazers_count：</span>{item.stargazers_count}</p>
            </div>
            </Link>
            
          ));
          
          var a = rootList.concat(list);
          setRootList(a);
          setRepoData(a);
          
        },
        (error) => {
          console.log(error);
        }
      );
  }, [page]);


    
    return (
      <main>
        <span className="fs20">您所在位置：<span className="strong">User-Repositories</span></span>
        <p className="fs20 strong">username: {params.userName}</p>
        <div className="repos-showArea">{repoData}</div>
      </main>
    );
  }
