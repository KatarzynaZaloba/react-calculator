import { StyledButton, 
    StyledForm, 
    StyledDiv, 
    StyledHeader, 
    StyledFieldset, 
    StyledSpan, 
    StyledInput, 
    StyledSelect, 
    StyledParagraph, 
    StyledParagraphFailure, 
    StyledParagraphLoading } from "./styled";
import { useState } from "react";
import { Clock } from "../Clock"
import Result from "../Result/index";
import { useRatesData } from "./useRatesData";


const Form = () => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledDiv>
                <p></p>
                <Clock />
                    <StyledHeader>
                        Kalkulator walutowy
                    </StyledHeader>
                        {ratesData.state === "loading"
                            ? (
                                <StyledParagraphLoading>
                                    Chwileczkę, <br /> ładuję kursy walut z Europejskiego Banku Centralnego.
                                </StyledParagraphLoading>
                             ) 
                             : (
                        ratesData.state === "error"
                            ? (
                                <StyledParagraphFailure>
                                    Strona nie załadowała się. Sprawdź połączenie internetowe.
                                </StyledParagraphFailure>
                            ) : (
                                <>
                                    <StyledFieldset>
                                        <p>
                                            <StyledSpan>
                                                Wpisz kwotę w PLN:
                                            </StyledSpan>
                                            <StyledInput
                                                type="number"
                                                step="0.01"
                                                required min="0"
                                                placeholder="Wpisz kwotę"
                                                value={amount}
                                                onChange={({ target }) => setAmount(target.value)}
                                            />
                                            <label>
                                            <p></p>
                                                <StyledSpan>
                                                    Wybierz walutę:
                                                </StyledSpan>
                                                <StyledSelect
                                                    value={currency}
                                                    onChange={({ target }) => setCurrency(target.value)}
                                                >
                                                    {Object.keys(ratesData.rates).map(((currency) => (
                                                    <option
                                                        value={currency}
                                                        key={currency}
                                                >
                                                    {currency}
                                                </option>
                                                )))}
                                                </StyledSelect>
                                            </label>
                                        </p>
                                        <StyledButton>Przelicz</StyledButton>
                                        <StyledParagraph>Kurs walut pochodzi z Europejskiego Banku Centralnego z dnia: <br></br><strong>{ratesData.date}</strong></StyledParagraph>
                                        <Result
                                            result={result}
                                            />
                                    </StyledFieldset>
                               </>
                            )
                        )}
            </StyledDiv>
                                                
        </StyledForm>
    );
};
export default Form;