import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼이 클릭됨");
  };
  return (
    <>
      <div className="inner">
        <button onClick={handleClick}>버튼</button>
        <Avatar image="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1356&q=80" isNew={true} />
        <Profile isNew={true} image="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1356&q=80" name="Anna Young" title="프론트엔드 개발자" />
        <Profile image="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" name="James Kim" title="백엔드 개발자" />
        <Profile image="https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" name="Bob yu" title="프론트엔드 개발자" />
      </div>
    </>
  );
}
export default AppProfile;
