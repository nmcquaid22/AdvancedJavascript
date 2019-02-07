import React from 'react';
import News from './News';


//     //const DropDown = ({item}) => (
//
//     class DropDown extends React.Component {
//      render() {
//
//        return (
//
//     <div className="container">
//
//               <ul>{author}</ul>
//
//       </div>
//
//
//     );
// }
// }
const DropDown = ({item}) => (

<div className="container">

          <ul>{item.author}</ul>

  </div>


);
 export default DropDown;


//
// // class DropDown extends React.Component {
// //   render() {
// //
// //     const DropDown = ({item}) => (
// //       return(
// //       <div className="container">
// //
// //                <ul>{item.author}</ul>
// //
// //        </div>
// //
// //
// //      ));
// //
// //
// //
// //
// // }
// // }
//
//
//
// const DropDown = ({item}) => (
//
// <div className="container">
//
//           <ul>{item.author}</ul>
//
//   </div>
//
//
// );
// //
