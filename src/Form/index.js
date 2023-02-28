import { StyledForm, StyledDiv, StyledHeader, StyledFieldset, StyledSpan, StyledInput, StyledSelect } from "./styled";
import { currencies } from "../currencies";
import { useState } from "react";
import { Clock } from "../Clock"
import Result from "../Result/index";


const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const rate = currencies.find(({ short }) => short === currency).rate;

    return (
        
        <StyledForm>
            <StyledDiv>
                <Clock />
            
            <StyledHeader>Kalkulator walutowy</StyledHeader>
            <StyledFieldset>
                <p>
                        <StyledSpan>Wpisz kwotę w PLN:</StyledSpan>
                        <StyledInput
                            type="number"
                            step="0.01"
                            required min="0"
                            placeholder="Wpisz kwotę"
                            value={amount}
                            onChange={({target }) => setAmount(target.value)}
                        />
                </p>
                <p>
                    <label>
                        <StyledSpan>Wybierz walutę</StyledSpan>
                        <StyledSelect
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option
                                    value={currency.short}
                                    key={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))} 
                        </StyledSelect>
                    </label>
                </p>
                
                <Result 
                amount={amount}
                currency={currency}
                rate={rate}
                />              
            </StyledFieldset>
            </StyledDiv>
        </StyledForm>
    );
};

export default Form;