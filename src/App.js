import logo from "./logo.svg";
// import "./App.css";
// import "./App.scss";
import styles from "./App.module.css";
import { Calendar } from "antd";
import Button from "./components/Button";
import { GithubOutlined } from "@ant-design/icons";

// CSS Module style
// {
//   App: "App_App__B2Ebb"
//   App-logo-spin: "App_App-logo-spin__1up6W"
//   header: "App_header__fhC8n"
//   link: "App_link__kpF6Q"
//   logo: "App_logo__7Edbg"
// }

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>버튼</Button>
        <GithubOutlined />

        <Calendar />
      </header>
    </div>
  );
}

export default App;
