import React, {useState} from 'react';
import './ExploreContainer.css';
import {useStorage} from "@ionic/react-hooks/storage";
import {
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonDatetime,
    IonCardHeader,
    IonItem,
    IonLabel
} from "@ionic/react";
import {useIonViewWillEnter} from "@ionic/react";


interface ContainerProps {
}

const TestListContainer: React.FC<ContainerProps> = () => {
    const tests: any[] = [];

    const {get, set} = useStorage();
    const [data, setData] = useState<any[]>([]);
    const [activeExperiment, setActiveExperiment] = useState<any>([]);
    const ACTIVE_TEST = "activeTest"


    useIonViewWillEnter(() => {
        async function loadData() {
            tests.length = 0;
            const loadedActiveTest = await getStorageItems(ACTIVE_TEST);
            if (loadedActiveTest) {
                let obj = JSON.parse(loadedActiveTest);
                setActiveExperiment(obj);
                const loadedData = await getStorageItems(obj.id);
                console.log(loadedData);
                if (loadedData) {
                    let obj = JSON.parse(loadedData);
                    for (const [key, value] of Object.entries(obj)) {
                        console.log(key);
                        tests.push(value);
                    }
                    setData(tests);
                }
            }
        }

        loadData();
    }, [data]);

    const getStorageItems = (data: any) => {
        return get(data);
    }

    const openTest=(data:any) => {
        set(ACTIVE_TEST, JSON.stringify(data));
    }

    return (
        <div className="container">
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{activeExperiment.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{activeExperiment.description}</IonCardContent>
            </IonCard>
            {data.map(testlauf => (
                <IonCard onClick={() => openTest(testlauf) }  button>

                    <IonCardContent>
                        <IonLabel>Zeitpunkt der Durchführung</IonLabel>
                        <IonItem>
                            <IonDatetime disabled displayFormat="D MMM YYYY H:mm" min="2019" max="2025" value={testlauf.selectedDate} />
                        </IonItem>
                        <IonLabel>Beschreibung</IonLabel>
                        <IonItem>
                                {testlauf.description}
                        </IonItem>
                    </IonCardContent>

                </IonCard>
            ))
            }
            <IonButton expand="block" size="small" onClick={() => openTest(activeExperiment)} routerLink="/test">
                Weiteren Testlauf erstellen
            </IonButton>
        </div>
    );
};

export default TestListContainer;
