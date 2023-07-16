import { Metadata } from "next";

import styles from "./DashboardLayout.module.css";

export const metadata: Metadata = {
  title: "SimoDashboard",
  description: "Eventos y Comunidades de SimRacing de habla hispana",
};

const DashboardLayout = (props: {
  children: React.ReactNode;
  events: React.ReactNode;
  communities: React.ReactNode;
}) => {
  return (
    <main className={styles.main}>
      {props.children}
      {props.events}
      {props.communities}
    </main>
  );
};

export default DashboardLayout;
