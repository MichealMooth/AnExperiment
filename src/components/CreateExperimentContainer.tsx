import React from 'react';
import './ExploreContainer.css';
import {IonButton, IonInput, IonItem, IonLabel, IonTextarea} from "@ionic/react";

interface ContainerProps { }

const CreateExperimentContainer: React.FC<ContainerProps> = () => {

    //initialisieren der Felder
    const state = {
        title: '',
        date: new Date(),
        description: '',
    };

    const createExperiment = (data: any) => {
        console.log('neues Experiment erstellen mit folgenden Daten: ', state.title);
        console.log('mit der Beschreibung', state.description)
        console.log('zum Zeitpunkt: ', state.date);
    }
    const setTitle = (data:any) => {
        state.title= data;
    }
    const setDescription = (data:any) => {
        state.description= data;
    }



    return (
    <div className="container">
            <IonItem>
                <IonLabel position="floating">Titel</IonLabel>
                <IonInput required type="text" onIonInput={(data: any) => setTitle(data.target.value)} value={state.title}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Description</IonLabel>
                <IonTextarea value={state.description} onIonChange={(data:any) => setDescription(data.detail.value)}/>
            </IonItem>


            <IonButton expand="block" onClick={e => createExperiment(e)}>
                Experiment erstellen
            </IonButton>
      </div>

  );


};

export default CreateExperimentContainer;
