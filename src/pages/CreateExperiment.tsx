import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import './CreateExperiment.css';
import CreateExperimentContainer from "../components/CreateExperimentContainer";

const CreateExperiment: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="home"/>
                    </IonButtons>
                    <IonTitle>Neues Experiment anlegen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">AnExperiment</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <CreateExperimentContainer/>
            </IonContent>
        </IonPage>
    );
};

export default CreateExperiment;
