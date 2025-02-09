import random

def deposit():
    """Allow the user to deposit money into their balance."""
    while True:
        try:
            amount = float(input("Enter the amount you want to deposit: $"))
            if amount <= 0:
                print("Deposit amount must be greater than $0.")
            else:
                return amount
        except ValueError:
            print("Invalid input! Please enter a valid amount.")

def withdraw(balance):
    """Allow the user to withdraw money from their balance."""
    while True:
        try:
            amount = float(input(f"Enter the amount you want to withdraw (Balance: ${balance}): $"))
            if amount <= 0:
                print("Withdrawal amount must be greater than $0.")
            elif amount > balance:
                print("Insufficient balance! Try a lower amount.")
            else:
                return amount
        except ValueError:
            print("Invalid input! Please enter a valid amount.")

def spin_slot_machine():
    """Simulate a slot machine spin."""
    symbols = ["🍒", "🍋", "🍉", "⭐", "💎"]
    return [random.choice(symbols) for _ in range(3)]

def calculate_winnings(reel, bet):
    """Calculate winnings based on the slot machine reel."""
    if reel[0] == reel[1] == reel[2]:  # All three symbols match
        return bet * 5
    elif reel[0] == reel[1] or reel[1] == reel[2] or reel[0] == reel[2]:  # Two symbols match
        return bet * 2
    else:
        return 0

def play_game():
    """Main function to run the slot machine game."""
    print("Welcome to the Casino Slot Machine!")
    balance = deposit()

    while True:
        print(f"\nCurrent Balance: ${balance}")
        action = input("What would you like to do? (play/deposit/withdraw/quit): ").lower()

        if action == "play":
            try:
                bet = float(input("Enter your bet amount: $"))
                if bet <= 0:
                    print("Bet amount must be greater than $0.")
                elif bet > balance:
                    print("Insufficient balance to place this bet.")
                else:
                    balance -= bet
                    reel = spin_slot_machine()
                    print(f"Reel: {' | '.join(reel)}")
                    winnings = calculate_winnings(reel, bet)
                    if winnings > 0:
                        print(f"Congratulations! You won ${winnings}")
                        balance += winnings
                    else:
                        print("Sorry, you lost this round.")
            except ValueError:
                print("Invalid input! Please enter a valid bet amount.")

        elif action == "deposit":
            deposit_amount = deposit()
            balance += deposit_amount
            print(f"You deposited ${deposit_amount}. Your new balance is ${balance}.")

        elif action == "withdraw":
            if balance <= 0:
                print("No balance available to withdraw.")
            else:
                withdrawal_amount = withdraw(balance)
                balance -= withdrawal_amount
                print(f"You withdrew ${withdrawal_amount}. Your new balance is ${balance}.")

        elif action == "quit":
            print(f"You left the casino with ${balance}. Thank you for playing!")
            break

        else:
            print("Invalid action! Please choose play, deposit, withdraw, or quit.")

if __name__ == "__main__":
    play_game()<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1QqS2jKSfJILei2kZDXQnT5N"
  publishable-key="pk_live_51Qp015KSfJILei2kdbdchQph2RUHUO67S5zOo3LFAj3lTEYe3vVi3AsSHgwk6PnW7PkSaaeucvSr9hjNMQ3Z8c8H00zYQ8CHbK"
>
</stripe-buy-button>public void StartStripePayment(float amount)
{
    StartCoroutine(SendStripeRequest(amount));
}

private IEnumerator SendStripeRequest(float amount)
{
    WWWForm form = new WWWForm();
    form.AddField("amount", (amount * 100).ToString());

    using (UnityWebRequest www = UnityWebRequest.Post(stripePaymentUrl, form))
    {
        www.SetRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        yield return www.SendWebRequest();

        if (www.result == UnityWebRequest.Result.Success)
        {
            string responseText = www.downloadHandler.text;
            Debug.Log("Stripe Payment initiated: " + responseText);
            Application.OpenURL(responseText);
        }
        else
        {
            Debug.LogError("Payment failed: " + www.error);
        }
    }
}try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],['crypto currency, btc,ethereum,litecoin,Dogecoin'
        line_items: [{
            price_data: {
                currency: 'usd'crypto coin currency of. 
					btc,etherum,      litecoin,Doge,
                product_data: { name: 'Game Purchase' },
                unit_amount: *5.00 amount * 100, // Convert to cents
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://your-game.com/payment-success',
        cancel_url: 'https://your-game.com/payment-cancel',
    });

    res.json({ url: session.url });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Stripe session creation failed' });
}const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
