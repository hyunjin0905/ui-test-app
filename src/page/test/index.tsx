// diff algorithm
import React, { FC, memo, useCallback, useState } from "react";

interface TestProps {
    name?: string;
}

const Test: FC<TestProps> = (props) => {
    const [ c, setC ] = useState<number>(0);
    const [ name, setName ] = useState<string>("");
    const Count = memo((props: { count: number }) => {
        console.log(props);
        return (
            <div>{ props.count }</div>
        );
    })

    const Button = memo((props: { add: () => void, count: number }) => {
        console.log(props);
        return (
            <button onClick={props.add}>{ props.count }++</button>
        )
    })

    const onChangeNameClick = () => {
        setName(`${Date.now()} 님`);
    }

    const add = () => setC(prev => prev + 1)

    return (
        <>
            <Count count={c} />
            <Button add={add} count={c} />
            <div>
                <button onClick={onChangeNameClick}>change name</button>
                <p>{ name }</p>
            </div>
        </>
    )
}


export default Test;