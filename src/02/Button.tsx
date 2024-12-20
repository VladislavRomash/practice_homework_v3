import React, {FC} from 'react';

type Props = {
    title: string
    onclickCallback: () => void
}

export const Button: FC<Props> = ({title, onclickCallback}) => <button onClick={onclickCallback}>{title}</button>