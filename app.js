function calculateBudget() {
    const income = parseFloat(document.getElementById('income-input').value);
    if (!income || income <= 0) {
        alert("Please enter a valid income.");
        return;
    }

    const personalMin = (income * 0.10).toFixed(2);
    const personalMax = (income * 0.15).toFixed(2);
    const businessInvestment = (income * 0.25).toFixed(2);
    const youtubeAds = (income * 0.20).toFixed(2);
    const longTerm = (income * 0.40).toFixed(2);
    const savings = (income * 0.05).toFixed(2);

    document.getElementById('personal-expenses').textContent = personalMin + " - " + personalMax;
    document.getElementById('business-investment').textContent = businessInvestment;
    document.getElementById('youtube-ads').textContent = youtubeAds;
    document.getElementById('long-term').textContent = longTerm;
    document.getElementById('savings').textContent = savings;

    document.getElementById('result').style.display = 'block';
}
