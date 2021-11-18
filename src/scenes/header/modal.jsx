import React from 'react';
import Popup from 'reactjs-popup';
import styled from "styled-components";

const MobileHeader = styled.header`
    background: radial-gradient(100% 100% at 48.65% 0%, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.2) 100%);
    border: 0.1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 5px;
    width: fit-content;
    padding: 10px;
    font-family: 'Caveat', cursive;
    font-size: 24px;
    margin-left: 5px;
    margin-top: 1px;
`

// mobile header icon styling
const MobileHeaderIcon = () => {
    return (
        <MobileHeader>
            <p>AF</p>
        </MobileHeader>
    )
}

export const Modal = () => {
    return (
      <Popup
          trigger={{MobileHeaderIcon}}
            modal
            nested
        >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header"> Modal Title </div>
                <div className="content">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                    Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                    delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                    commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                    explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                    </div>
                    <div className="actions">
                        <Popup
                            trigger={<button className="button"> Trigger </button>}
                            position="top center"
                            nested
                        >
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                magni omnis delectus nemo, maxime molestiae dolorem numquam
                                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                sapiente! Laudantium, aperiam doloribus. Odit, aut.
                            </span>
                        </Popup>
                        <button
                            className="button"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                        close modal
                        </button>
                    </div>
                </div>
                )}
        </Popup>
    )
};

// const OriginalModal = () => {
//     return (
//         <Popup
//             trigger={<button className="button"> Open Modal </button>}
//               modal
//               nested
//           >
//           {close => (
//               <div className="modal">
//                   <button className="close" onClick={close}>
//                       &times;
//                   </button>
//                   <div className="header"> Modal Title </div>
//                   <div className="content">
//                       {' '}
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
//                       Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
//                       delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
//                       <br />
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
//                       commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
//                       explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
//                       </div>
//                       <div className="actions">
//                           <Popup
//                               trigger={<button className="button"> Trigger </button>}
//                               position="top center"
//                               nested
//                           >
//                               <span>
//                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//                                   magni omnis delectus nemo, maxime molestiae dolorem numquam
//                                   mollitia, voluptate ea, accusamus excepturi deleniti ratione
//                                   sapiente! Laudantium, aperiam doloribus. Odit, aut.
//                               </span>
//                           </Popup>
//                           <button
//                               className="button"
//                               onClick={() => {
//                                   console.log('modal closed ');
//                                   close();
//                               }}
//                           >
//                           close modal
//                           </button>
//                       </div>
//                   </div>
//                   )}
//           </Popup>
//       )
// }