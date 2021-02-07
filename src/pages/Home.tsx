import {
    IonButton,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {add} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AnExperiment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">AnExperiment</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
        <IonFooter>
            <IonButton expand="full" size="large" color="light" routerLink="/createExperiment">
                <IonIcon slot="start" icon={add} /><IonLabel>Experiment erstellen</IonLabel>
            </IonButton>
        </IonFooter>
    </IonPage>
  );
};

export default Home;
