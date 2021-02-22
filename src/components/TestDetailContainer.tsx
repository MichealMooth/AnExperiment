import React, {useState} from 'react';
import './ExploreContainer.css';
import {useStorage} from "@ionic/react-hooks/storage";
import {
    IonButton,
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonDatetime,
    IonInput,
    IonItem,
    IonLabel,  IonTextarea,
    useIonViewWillEnter
} from "@ionic/react";

interface ContainerProps { }

const TestDetailContainer: React.FC<ContainerProps> = () => {
    const { get } = useStorage();
    const ACTIVE_TEST = "activeTest";
    const ACTIVE_TEST_RUN = "aktiverTestlauf";

    const [data, setData] = useState<any>([]);
    const [selected, setSelected]= useState<string>("Freilaufend")
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [activeExperiment, setActiveExperiment] = useState<any>([]);



    useIonViewWillEnter(() => {
        async function loadData() {
            const loadedActiveTest = await getStorageItems(ACTIVE_TEST);
            if(loadedActiveTest) {
                let obj = JSON.parse(loadedActiveTest);
                setActiveExperiment(obj);
                const loadedData = await getStorageItems(ACTIVE_TEST_RUN);
                if(loadedData) {
                    let obj = JSON.parse(loadedData);
                    setSelectedDate(obj.selectedDate);
                    setSelected(obj.selection);
                    console.log(obj);
                    setData(obj);
                }
            }
        }

        loadData();
    }, [data]);



    const getStorageItems = (data:any) => {
        return get(data);
    }




    return (
        <div className="container">
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{activeExperiment.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{activeExperiment.description}</IonCardContent>
            </IonCard>
            <IonCard>

                <IonItem>
                    <IonLabel>Zeitpunkt</IonLabel>
                    <IonDatetime readonly displayFormat="D MMM YYYY H:mm" min="2019" max="2025" placeholder="Datum auswählen" value={selectedDate}/>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Tierart</IonLabel>
                    <IonInput readonly   type="text" value={data.tierart}/>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Anzahl</IonLabel>
                    <IonInput readonly required type="number" value={data.anzahl}/>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Habitat</IonLabel>
                    <IonInput readonly required  type="text" value={selected}/>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Beschreibung der Testdurchführung</IonLabel>
                    <IonTextarea readonly rows={4} value={data.description} />
                </IonItem>
                <br/>
            </IonCard>
        </div>
    );
};

export default TestDetailContainer;
