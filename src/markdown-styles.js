import styled from 'styled-components';

const mdH1 = styled.h1`
    font-size: 67px;
    color: orange;
    font-weight: bold;
`;

const mdH2 = styled.h2`
    font-size: 50px;
    color: orange;
    font-weight: bold;
`;

const mdH3 = styled.h3`
    font-size: 38px;
    color: orange;
    font-weight: bold;
`;

const mdH4 = styled.h4`
    font-size: 28px;
    color: orange;
    font-weight: bold;
`;

const mdH5 = styled.h5`
font-size: 21px;
color: orange;
font-weight: bold;
`;

const mdH6 = styled.h6`
    font-size: 16px;
    color: orange;
    font-weight: bold;
`;

const mdhr = styled.hr`
    border: 3px dotted blue;
`;

const mdStrong = styled.strong`
                font-weight: bolder;
                color: #F27997;
`;

export const mdTemplateOverrides = {
        h1: {
            component: mdH1
        },
        h2: {
            component: mdH2
        },
        h3: {
            component: mdH3
        },
        h4: {
            component: mdH4
        },
        h5: {
            component: mdH5
        },
        h6: {
            component: mdH6
        },
        hr: {
            component: mdhr
        },
        strong: {
            component: mdStrong
        },
        em: {
            component: styled.em`
                font-weight: lighter;
                font-style: italic;
                color: #887711;
        `},
        blockquote: {
            component: styled.blockquote`
                border-left: 5px lightgrey solid;
                padding-left: 5px;
        `},
        li: {
            component: styled.li`
                display: list-item;
                list-style: '*~~*';

        `}
};
