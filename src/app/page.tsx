"use client";
import { useState } from "react";
import styles from "./page.module.css";

function CalendarEvent(props: {name: string, desc: string}) {
  return (
    <div className={styles.eventWrap}>
      <h2 className={styles.eventHeader}>{props.name}</h2>
      <span className={styles.eventDesc}>{props.desc}</span>
    </div>
  );
}

function Calendar() {
  const events: Array<{name: string, desc: string}> = useState([]);
  var calendarEventsElm = events.map(event => 
    <CalendarEvent name={event.name} desc={event.desc}></CalendarEvent>
  )
  return (
    <div className={styles.calendar}>
      {calendarEventsElm}
    </div>
  )
}


export default function Home() {
  return (
    <main className={styles.main}>
      <Calendar />
    </main>
  );
}
