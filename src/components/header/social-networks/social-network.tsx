"use client";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoInstagram, logoGithub } from "ionicons/icons";

function SocialNetwork() {
  return (
    <div className="flex gap-3 items-center">
      <IonIcon
        icon={logoLinkedin}
        style={{ fontSize: "20px", color: "foreground" }}
      />
      <IonIcon
        icon={logoInstagram}
        style={{ fontSize: "20px", color: "foreground" }}
      />
      <IonIcon
        icon={logoGithub}
        style={{ fontSize: "20px", color: "foreground" }}
      />
    </div>
  );
}

export default SocialNetwork;
