import styled from 'styled-components';

const Chip = ({label, color}) => {
    return (
        <Container style={{background: `#${color}`}}>
            <span>{label}</span>
        </Container>
    );

}

export default Chip;

const Container = styled.div`
    display: flex;
    padding: 6px;
    border-radius: 12px;
    span {
        color: #;
    }
`;