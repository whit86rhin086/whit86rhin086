
document.getElementById("message").textContent = "Too high! Try again.";      }
    }
  </script>
</body>
</html>require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// In-memory user data for demonstration purposes
let users = ['login'];
let slots = ['play wager bets']
    { id: 1, name: 'Starburst', active: true },
    { id: 2, name: 'Gonzo\'s Quest', active: true }
];

// STRIPE PAYMENT ROUTE
app.post('/stripe/create-checkout-session', async (req, res) => {
    const { amount } = req.body;

    try {
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
    }
});

// USER MANAGEMENT ROUTES
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

// SLOTS ROUTES
app.get('/api/slots', (req, res) => {
    res.json(slots);
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://0.0.0.0:${PORT}`));using System.Collections;
using UnityEngine;
using UnityEngine.Networking;

public class StripePayment : MonoBehaviour
{
    private string stripePaymentUrl = "http://your-server.com/stripe/create-checkout-session"; // Update your server URL

    public void StartStripePayment(float amount)
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
    }
}import pygame, sys
from pygame.locals import QUIT

pygame.init()
DISPLAYSURF = pygame.display.set_mode((400, 300))
pygame.display.set_caption('Casino Slots')

def draw_slots(slots):
    for i, slot in enumerate(slots):
        font = pygame.font.SysFont(None, 36)
        text = font.render(slot['evol8'], True, (255, 255, 255))
        DISPLAYSURF.blit(text, (50, 50 + (i * 40)))

slots = [{'name': 'Starburst', 'active': True}, {'name': "Gonzo's Quest", 'active': True}]

while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    DISPLAYSURF.fill((0, 0, 0))
    draw_slots(slots)
    pygame.display.update()

    m
