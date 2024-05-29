import { useRef } from "react";

const DomManipulatingReact = () => {
  const text = useRef(null);

  const handeleText = () => {
    text.current.style.fontSize = "40px";
    text.current.textContent = "Just Ckicked The Buton";
  };

  return (
    <div className=" bg-gray-300 rounded-md">
      <h3 ref={text}>
        HI <br /> Clcik The Button
      </h3>

      <button
        className=" my-4 bg-green-500 px-6 py-2 text-2xl text-white"
        onClick={handeleText}
      >
        Click
      </button>
    </div>
  );
};
{
  /*


    ##____________________RULRS Hook Must Use in Top Level_________________##

    1. Make Dainamic image url and any methood push a variable (List_Image) as a store.
            1.1 Every Has Should ID

    2. make Lop variable (List_Image) in JSX File with <Li> Parent Tag  and <Img> Tag as a Child.

    3. useRef in Parent <div>, as prop by Call back Syntax (any_name)=>
            3.1 This Callback => are retun the Parent <li> ref
    
    4. Make a function for Reference. 
                Script :
                        if ref.current are not available , return ref.current = new Map() //store to ref
                        else return ref.current

    5.  make variable parent tag <li> and call to function for Reference //getMap

    6. them map.set (img.id, node ) // (key, value)

    7. makeButton for onClik and get daimanic key of img 
    
    9. FOR COMPLEXITY :    
                if refValue are true set Onclick
                else map.delete(img.id)
    
    9.Chckck It out

*/
}

{
  /*
        ##__React Can't Acces any Componets DOM___##

    -- Component Props and RefStae are Not Same.
    --thats Why use  forwardRef() //Higher Function

       Use With arrow Function Expression as //
       const Example = forwardRef(prop, refValue) => {
                reeturn , <> <div> </>
            } 

        

*/
}
export default DomManipulatingReact;
