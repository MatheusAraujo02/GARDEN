// import React, { createContext, useState, useContext } from "react";

// const AtividadeContext = createContext();

// export const AtividadesProvider = ({ children }) => {
//     const [atividadesLidas, setAtividadesLidas] = useState({});

//     const inicializarAtividades = ( atividades ) => {
//         const estadoInicial ={};
//         atividades.forEach(atividade => {
//             estadoInicial[atividade.ati_id] = false;
//         });
//         setAtividadesLidas(estadoInicial);            
//     };

//     const toggleAtividadeLida = (id) => {

//         setAtividadesLidas((prev) => ({
//             ...prev,
//             [id]: !prev[id],
//         }));
//     };

//     return(
//         <AtividadeContext.Provider value ={{ atividadesLidas, toggleAtividadeLida, inicializarAtividades}}> 
//             {children}
//         </AtividadeContext.Provider>
//     );
// };

// export const useAtividades = () => useContext(AtividadeContext);