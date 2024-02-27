import fs from 'fs';
import path from 'path';

const fileRemover = (filename) => {
    fs.unlink(path.join(__dirname,"../uploads",filename), function(err){
        if(err & err.code == "ENOENT"){
            //bulunamayan dosya
            console.log(`File ${filename} bulanamadı, kaldırılacak`);
        }else if(err){
            console.log(`${filename} kaldırırken hata oluştu.`)
        }else{
            console.log(`${filename} kaldırıldı.`)
        }
    } );
}

export {fileRemover};