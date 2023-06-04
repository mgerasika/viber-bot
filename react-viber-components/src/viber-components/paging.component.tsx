import { VIBER_LINKS } from '@src/constants/viber-links.constant';
import React from 'react';
import { ViberButton } from './viber-button.component';

interface IProps {
    link: string;
    currentPage: number;
    totalPages: number;
}

enum EAction {
    prev = 'prev',
    сurrent = 'current',
    next = 'next',
}
export const Paging = ({ link, currentPage, totalPages }: IProps): JSX.Element => {
    return (
        <>
            <ViberButton
                actionType={currentPage === 0 ? 'none' : 'reply'}
                Text={currentPage === 0 ? '' : 'Попередня'}
                Columns={2}
                Rows={1}
                onClick={{
                    link,
                    actionName: EAction.prev,
                    actionArgument: currentPage - 1,
                }}
            />
            ,
            <ViberButton
                actionType="none"
                onClick={undefined}
                Columns={2}
                Rows={1}
                Text={`${currentPage + 1} з ${totalPages}`}
            />
            ,
            <ViberButton
                actionType={currentPage === totalPages - 1 ? 'none' : 'reply'}
                Text={currentPage === totalPages - 1 ? '' : 'Наступна'}
                Columns={2}
                Rows={1}
                onClick={{
                    link,
                    actionName: EAction.next,
                    actionArgument: currentPage + 1,
                }}
            />
            ,
            <ViberButton
                Columns={6}
                Rows={1}
                Text="На головну"
                onClick={{
                    link: VIBER_LINKS.index,
                }}
            />
        </>
    );
};
