export default function UserInput({ userInput, handleInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>

        <p>
          <label>Duration (In Years)</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
