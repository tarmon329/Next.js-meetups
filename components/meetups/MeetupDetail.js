import { useRouter } from "next/router";
import styles from "./MeetupDetail.module.css";

export default function MeetupDetail(props) {
  const router = useRouter();
  return (
    <section className={styles.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <addres>{props.address}</addres>
      <p>{props.description}</p>
    </section>
  );
}
