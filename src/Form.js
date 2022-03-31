import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {name : ''}
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    changeState(event){
        this.setState({name:event.target.value})
    }
    submitForm(event){
        event.preventDefault()
        let targetUrl = `/users/${this.state.name}/repos`;
        if(this.state.name === ''){
            window.location.href = '/';
        }
        else{
            window.location.href = targetUrl;
        }
        
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className="search-form">
                <label>使用者名稱： </label>
                <input type="text" id="name" name="name" className="search-name"
                        placeholder="請輸入使用者名稱"
                        value={this.state.name} 
                        onChange={this.changeState} />
                <input type="submit" value="查詢" className="search-btn"/>
            </form>
        )
    }
}


export default Form