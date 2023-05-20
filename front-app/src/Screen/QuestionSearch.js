import React, {useState} from "react";

function QuestionSearch(props){
    const [SearchTerms,setSerchTerms] = useState("");

    const onChangeSearch = (event)=>{
        setSerchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)
    }

        return(
            <div>
                <input className="form-control mr-sm-2" type="search" id="regsearch" name="gsearch"
                value={SearchTerms}
                placeholder= "Search by Customer ID"
                onChange={onChangeSearch}/>
            </div>
        )

}

export default QuestionSearch;