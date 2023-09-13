import React from 'react'
import Editor from '@monaco-editor/react'
import { useState,useRef } from 'react'
const Codeeditor = () => {


    const files={
        "script.js":{
            name:"script.js",
            language:'javascript',
            value:"let name=5"
        },
        "script.py":{
            name:"script.py",
            language:'python',
            value:"print('hello world')"
        },
        "script.html":{
            name:"script.html",
            language:'html',
            value:"<p>this is a paragrahg</p>"
        },
        "script.cpp":{
            name:"script.cpp",
            language:'cpp',
            value:"#include<iostream>\n using namespace std;\n void main(){\n \n} "
        },
        "script.java":{
            name:"index.html",
            language:'java',
            value:"public class { \npublic static void main(String,args[]){ \n  \n} \n}"
        }
    }

    const [fileName,setFileName]=useState("script.js")
    const editorRef=useRef(null)
    const file=files[fileName]
    // const [output, setOutput] = useState('');

    function handleEditorDidMount(editor,monaco)
    {
       editorRef.current=editor    
       editorRef.current.onContextMenu((e) => {
        e.preventDefault();
      }); 
      editorRef.current.onKeyDown((e) => {
        if (e.ctrlKey && e.code === 'KeyV') {
          e.preventDefault();
        }
      });
    }
    function getEditorValue(){

        alert("RUN \n"+editorRef.current.getValue())
    //   try{
    //   const codeToRun = editorRef.current.getValue();
    //   const result = eval(codeToRun);
    //   setOutput(result);
    
    //   }catch(error)
    //   {
    //     setOutput(`Error:${Error.message}`)
    //   }
    }
  return (
    <div>
         
        <button onClick={()=> setFileName("script.js")} type="button" className="btn btn-outline-primary m-3">index.js</button>
        <button onClick={()=> setFileName("script.py")} type="button" className="btn btn-outline-secondary  m-3">index.py</button>
        <button onClick={()=> setFileName("script.html")} type="button" className="btn btn-outline-success  m-3">index.html</button>
<button onClick={()=> setFileName("script.cpp")}type="button" className="btn btn-outline-secondary  m-3">index.cpp</button>
<button  onClick={()=> setFileName("script.java")}  type="button" className="btn btn-outline-success  m-3">index.java</button>
<button onClick={()=> getEditorValue()} type="button" className="btn btn-outline-danger  m-3">RUN</button>
<div className='row'>
        <Editor 
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        />
         
       
      
        </div>
    </div>
  )
}

export default Codeeditor