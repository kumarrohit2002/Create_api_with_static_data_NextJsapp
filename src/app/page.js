import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <h1>Home Page</h1>
      <Link href="/users"><span>User List</span></Link>
      <br/>
      <br/>
      <Link href="/addUser"><span>Add User</span></Link>

    </div>
  );
}
