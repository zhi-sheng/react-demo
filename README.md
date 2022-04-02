# Dcard 2022 Web Frontend Intern Homework

## 啟動方法
  ### (1)&nbsp;&nbsp;已 Deploy 至 Netlify,&nbsp;&nbsp;參考網址：https://project-demo-react.netlify.app/
  ### (2)&nbsp;&nbsp;Download files,&nbsp;&nbsp;以 npm 啟動執行

## 架構設計
  #### 主要檔案為
  ### index.js
  ### Form.js： 處理“搜尋User”的表單
  ### RoutesController.js： 路由控制
  ### SingleUser.js： 單一User的Repos顯示
  ### SingleRepository.js： 該User的單一Repos顯示
  #### 將搜尋表單置於每頁上方以便搜尋，輸入欲搜尋的使用者名稱後，跳轉至/users/{username}/repos頁面，即由 RoutesController.js 控制 render SingleUser.js頁面。進入頁面時顯示10筆資料(repos)，滑動至頁面底部時額外加載另外10筆資料。點選其一 repos 方框後切換至/users/{username}/repos/{repo}，即 render SingleRepository頁面，顯示該repo資訊。並在各單一repo頁面提供回到repos列表按鈕。
