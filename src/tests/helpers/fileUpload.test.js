import cloudinary from 'cloudinary';
import {  fileUpload } from "../../actions/helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dr8phxlfa', 
    api_key: '494535249498512', 
    api_secret: 'HGZM3N4bd99VzSXlO4DE5uFej_g' 
  });

describe('Pruebas en fileUpload', ()=> {

    test('Debe de cargar un archivo y cargar el URL', async() => {

        const resp = await fetch('data:image/png;base64,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');
        const blob = await resp.blob();
        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof(url)).toBe('string')

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1].replace('.png', '');

        await cloudinary.v2.api.delete_resources(imageId, {}, () => {
            console.log('deleted')
        })
    })

    test('Debe de retornar un error', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null)
    })
});