import {InputElement} from "./InputElement.jsx";

export default function UserInput({value, onChange}) {

    return (
        <>
            <section id={"user-input"}>
                <div className={"input-group"}>
                    <InputElement
                        label={"Initial Investment"}
                        value={value.initialInvestment}
                        onChange={(event) =>
                            onChange('initialInvestment',
                                event.target.value)}/>
                    <InputElement
                        label={"Annual Investment"}
                        value={value.annualInvestment}
                        onChange={(event) =>
                            onChange('annualInvestment',
                                event.target.value)}/>
                </div>
                <div className={"input-group"}>
                    <InputElement
                        label={"Expected Return"}
                        value={value.expectedReturn}
                        onChange={(event) =>
                            onChange('expectedReturn',
                                event.target.value)}/>
                    <InputElement
                        label={"Duration"}
                        value={value.duration}
                        onChange={(event) =>
                            onChange('duration',
                                event.target.value)}/>
                </div>
            </section>
        </>
    )
}