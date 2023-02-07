import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useParams } from "react-router-dom";
import Axios from "../../Utils/Axios";
import { store } from "../..";
import { useEffect, useState } from "react";
pdfMake.vfs = pdfFonts.pdfMake.vfs;



export default function Certificado() {

    const {http} = Axios();
    const { userId }  = store.getState().userId;
    const [user, setUser] = useState([]);
    const [curso, setCurso] = useState([]);
    const {cursoId} = useParams();

    useEffect(() => {
        getUsers()
        getCurso()
    }, []);

    function getCurso() {
        http.get(`/curso/${cursoId}`).then((response) => {
            setCurso(response.data);
        });
    }
    function getUsers() {
        http.get(`/user/${userId}`).then((response) => {
            setUser(response.data);
        });
    }




    const docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        content: [
            {text: 'CERTIFICADO', style: 'header'},
            {text: 'Certificamos que, para os devidor fins, o/a aluno/a', style: 'header2'},
            {text: `${user.nome}`, style: 'name'},
            {text: `concluiu o curso livre de "${curso.nome}", ministrado pelo profissional ${curso.professor}, entre o período de ${curso.createdAt} e ${curso.updatedAt}, na Escola de Cursos Livres Merlin.` , style: 'body'},
        ],

        styles: {
            header: {
                fontSize: 70,
                bold: true,
                alignment:'center',
                margin: [0, 49, 0, 49],
            },
            header2: {
                fontSize: 17,

                alignment:'center',
            },
            name: {
                fontSize: 48,
                alignment:'center',
                margin: [0, 20, 0, 20],
                characterSpacing: 3,
            },

            body: {
                fontSize: 17,   
                alignment: 'center',
                margin: [70, 0, 70, 0],

            },
        },
    }
    const [url, setUrl] = useState(null)

    const createPdf = () => {
        const pdfGenerator = pdfMake.createPdf(docDefinition)
        pdfGenerator.getBlob((blob) => {
            const url = URL.createObjectURL(blob)
            setUrl(url)
        })
        pdfGenerator.download()
     }

      
    return(
        <div>
            <button className="btn" onClick={() => {createPdf()}}>
                Criar PDF
            </button>
        </div>
    )
}