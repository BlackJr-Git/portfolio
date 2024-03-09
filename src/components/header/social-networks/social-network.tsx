"use client";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoInstagram, logoGithub } from "ionicons/icons";

function SocialNetwork() {
  return (
    <div className="flex gap-3 items-center">
      <a href="https://www.linkedin.com/in/junior-asosa-98b071155">
        <IonIcon
          icon={logoLinkedin}
          style={{ fontSize: "20px", color: "foreground" }}
        />
      </a>
      <a href="https://www.instagram.com/junior_asosa/">
        <IonIcon
          icon={logoInstagram}
          style={{ fontSize: "20px", color: "foreground" }}
        />
      </a>
      <a href="https://github.com/BlackJr-Git">
        <IonIcon
          icon={logoGithub}
          style={{ fontSize: "20px", color: "foreground" }}
        />
      </a>
    </div>
  );
}

export default SocialNetwork;
