import { useState  } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
//import {  base64FromPath } from '@ionic/react-hooks/filesystem';
//import { useStorage } from '@ionic/react-hooks/storage';
import { CameraResultType, CameraSource} from "@capacitor/core";


export interface Photo {
    filepath: string;
    webviewPath?: string;
}


export function usePhotoGallery() {
    //const { get, set } = useStorage();



    // erstellen von Bildern mit React
    const { getPhoto } = useCamera();
    const [photos, setPhotos] = useState<Photo[]>([]);

    const takePhoto = async () => {
        const cameraPhoto = await getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [{
            filepath: fileName,
            webviewPath: cameraPhoto.webPath
        }, ...photos];
        setPhotos(newPhotos)
    };

    return {
        photos,
        takePhoto
    };


    /*const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
        const base64Data = await base64FromPath(photo.webPath!);
        const savedFile = await writeFile({
            path: fileName,
            data: base64Data,
            directory: FilesystemDirectory.Data
        });
        return {
            filepath: fileName,
            webviewPath: photo.webPath
        };
    };*/



}