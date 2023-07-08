
// function that moves an element to a target element
export default function moveKeyById(element_id, target_element_id, parent_element_id){

        const element_el = document.getElementById(element_id)
        const target_element_el = document.getElementById(target_element_id)
        
        // the parent of the element to move, since its absolutely postioned you compute
        // the translate coordinate with regards to the parent
        const element_wrapper_el = document.getElementById(parent_element_id)

        // check if both the element and and its target and its wrapper are loaded
        if(element_el && target_element_el && element_wrapper_el){
            let target_bounding_box = target_element_el.getBoundingClientRect()
            let wrapper_bounding_box = element_wrapper_el.getBoundingClientRect()
            element_el.setAttribute("transform", "translate(" + (target_bounding_box.left - wrapper_bounding_box.left) + "," + (target_bounding_box.top - wrapper_bounding_box.top) + ")")
        }

        /*
        //LeftIndex
        var LeftIndex_el = document.getElementById("LeftIndex")
        var keyboard_wrapper_el = document.getElementById("keyboard")
        console.log("left index ref: ", LeftIndex_el)
        if(LeftIndex_el && keyboard_wrapper_el){
            var keyboard_wrapper_bounding_box = keyboard_wrapper_el.getBoundingClientRect()
            var f_el = document.getElementById("f") || document.getElementById("F")
            var f_elBoundingBox = f_el.getBoundingClientRect()
            console.log('f bounding box : ', f_elBoundingBox)
            LeftIndex_el.setAttribute("transform", "translate(" + (f_elBoundingBox.left - keyboard_wrapper_bounding_box.left) + "," + (f_elBoundingBox.top - keyboard_wrapper_bounding_box.top) + ")")
        }
        */
    

}