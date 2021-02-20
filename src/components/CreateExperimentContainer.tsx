import React from 'react';
import './ExploreContainer.css';
import {IonButton, IonInput, IonItem, IonLabel, IonTextarea} from "@ionic/react";
import {useStorage} from "@ionic/react-hooks/storage";


interface ContainerProps {
}

const TEST_STORAGE = "test";


const CreateExperimentContainer: React.FC<ContainerProps> = () => {
    const { get, set } = useStorage();

    //initialisieren der Felder
    const state = {
        id:'',
        title: '',
        date: new Date(),
        description: '',
    };

    const createExperiment = (data: any) => {
        console.log('neues Experiment erstellen mit folgenden Daten: ', state.title);
        console.log('mit der Beschreibung', state.description)
        console.log('zum Zeitpunkt: ', state.date);
        saveExperimentToStorage(state);
    }
    const setTitle = (data: any) => {
        state.title = data;
    }

    const setDescription = (data: any) => {
        state.description = data;
    }

    const saveExperimentToStorage = (data:any) => {

        set(TEST_STORAGE, JSON.stringify(data));
    }


    return (
        <div className="container">

            <IonItem>
                <IonLabel position="floating">Titel</IonLabel>
                <IonInput required type="text" onIonInput={(data: any) => setTitle(data.target.value)}
                          value={state.title}/>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Description</IonLabel>
                <IonTextarea value={state.description} onIonChange={(data: any) => setDescription(data.detail.value)}/>
            </IonItem>


            <IonButton expand="block" onClick={e => createExperiment(e)}>
                Experiment erstellen
            </IonButton>
        </div>

    );


};

export default CreateExperimentContainer;
