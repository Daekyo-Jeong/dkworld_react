import React, {useState} from 'react';
import LabIntro from '../../LabIntro';

const state = {
    contents:[
    {
        id:1, 
        title:"HTML", 
        desc:"HTML is for information"
    },
    {
        id:2, 
        title:"CSS", 
        desc:"CSS is for design"
    },
    {
        id:3, 
        title:"JavaScript", 
        desc:"JavaScript is for interaction"
    }]
}


function Subject({title, desc}){
    return(
        <>
        <h1><a href="/" onClick={function(e){
            e.preventDefault();
        }}>{title}</a></h1>
        <p>{desc}</p>
        </>
    );
}

function ReadContent({title, desc}){
    return(
        <>
        <article>
            <h2>{title}</h2>
            <p>{desc}</p>
        </article>
        </>
    );
}

function ContentsList({data, onClick}){

    let lists = [];
    let i = 0;
    while(i<data.length){
        lists.push(
            <li key={data[i].id}>
                <a href="" onClick={onClick}>{data[i].title}</a>
            </li>
        );
        i = i + 1;
    }
    return(
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    )
}

function TestButton(){
    return(
        <button onClick={function(){

        }}></button>
    )
}

function Labs05() {
    return (
        <>
            <LabIntro
            titlee="createReadUpdateDelete"
            titlek="생성확인수정삭제"
            funcdesc="서버에 데이터가 저장되진 않지만, CRUD 모델 구현"
            updatedesc={`2021.11.04 - start`}
            />
            <Subject
            title="Web"
            desc="Hello, world"
            />
            <ContentsList
            data={state.contents}
            onClick={(e)=>{
                e.preventDefault();
                console.log(e);
            }}
            />
        </>
    )
}

export default Labs05
