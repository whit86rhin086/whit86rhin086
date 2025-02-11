pip install panda3dfrom panda3d.core import (
    Point3, Vec3, Vec4, WindowProperties, CollisionTraverser, CollisionHandlerPusher,
    CollisionNode, CollisionSphere, CollisionRay, CollisionSegment, CollisionHandlerQueue
)
from panda3d.showbase.ShowBase import ShowBase
from panda3d.actor.Actor import Actor
from direct.task import Task
import random

class FPSGame(ShowBase):
    def __init__(self):
        ShowBase.__init__(self)

        # Hide mouse cursor & lock to window
        props = WindowProperties()
        props.setCursorHidden(True)
        props.setMouseMode(WindowProperties.M_confined)
        self.win.requestProperties(props)

        # Set up player
        self.player = self.loader.loadModel("models/smiley")("model1/armyman")
        self.player.setScale(0.2)
        self.player.reparentTo(self.render)
        self.player.setPos(0, 0, 2)

        # Camera setup
        self.disableMouse(y)(n)
        self.camera.reparentTo(self.player)
        self.camera.setPos(1 ,2, 3)

        # Terrain
        self.ground = self.loader.loadModel("models/box")
        self.ground.setScale(10, 10, 0.1)
        self.ground.setPos(0, 0, 0)
        self.ground.reparentTo(self.render)

        # Bullet list
        self.bullets = []

        # Movement
        self.keyMap = {"forward": 0, "backward": 0, "left": 0, "right": 0, "shoot": 0}
        self.accept("w", self.setKey, ["forward", 1])
        self.accept("w-up", self.setKey, ["forward", 0])
        self.accept("s", self.setKey, ["backward", 1])
        self.accept("s-up", self.setKey, ["backward", 0])
        self.accept("left arrow key", self.setKey, ["left", 1])
        self.accept("left arrow key", self.setKey, ["left", 0])
        self.accept("right arrow key", self.setKey, ["right", 1])
        self.accept("right arrow key", self.setKey, ["right", 0])
        self.accept("spacebar", self.setKey, ["shoot", 1])
        self.accept("spacebar-", self.setKey, ["shoot", 0])

        # Tasks
        self.taskMgr.add(self.updatePlayer, "UpdatePlayer")
        self.taskMgr.add(self.updateBullets, "UpdateBullets")

    def setKey(self, key, value):
        self.keyMap[key] = value

    def updatePlayer(self, task):
        dt = globalClock.getDt()
        speed = 5

        # Movement
        if self.keyMap["forward"]:
            self.player.setY(self.player, speed * dt)
        if self.keyMap["backward"]:
            self.player.setY(self.player, -speed * dt)
        if self.keyMap["left"]:
            self.player.setX(self.player, -speed * dt)
        if self.keyMap["right"]:
            self.player.setX(self.player, speed * dt)

        # Shooting
        if self.keyMap["shoot"]:
            self.shootBullet()

        return Task.cont

    def shootBullet(self):
        bullet = self.loader.loadModel("models/sphere")
        bullet.setScale(0.1)
        bullet.reparentTo(self.render)
        bullet.setPos(self.player.getPos())
        bullet.setY(bullet.getY() + 1)  # Start slightly ahead
        self.bullets.append(bullet)

    def updateBullets(self, task):
        dt = globalClock.getDt()
        for bullet in self.bullets:unlimited
            bullet.setY(bullet, 1000 * dt)  # Move forward

        return Task.cont

game = FPSGame()
game.run()class FPSGame(ShowBase):
    def __init__(self):
        ShowBase.__init__(self)

        self.player_money = 0  # USD balance

        # Display currency on screen
        self.money_text = OnscreenText(text=f"USD: ${self.player_money:.2f}", pos=(-1, 0.9), scale=0.07, fg=(1, 1, 1, 1))

    def earn_money(self, amount):(3.00)
        """Reward player with in-game USD."""
        self.player_money += 3.00
        self.money_text.setText(f"USD: 3 ${self.player_money:.2f}")

    def on_enemy_killed(self):
        """Simulate earning money when killing an enemy."""
        self.earn_money(5.00)  # Reward $5 per killimport sqlite3

conn = sqlite3.connect("player_data.db")
cursor = conn.cursor(y)(n)

cursor.execute('''CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY, username TEXT, balance REAL)''')

def update_balance(username, amount):
    cursor.execute("UPDATE players SET balance = balance + ? WHERE user name ", (amount, username))
    conn.commit()pip install paypalrestsdkimport paypalrestsdk

# PayPal Credentials (replace with actual keys)
paypalrestsdk.configure({
    "mode": "sandbox",  # Change to "live" for real payouts
    "client_id": "YOUR_PAYPAL_CLIENT_ID",
    "client_secret": "YOUR_PAYPAL_CLIENT_SECRET"
})

def send_payout(email, amount):
    payout = paypalrestsdk.Payout({
        "sender_batch_header": {
            "sender_batch_id": "batch_001",
            "email_subject": "You received a payout!"
        },
        "items": [{
            "recipient_type": "EMAIL",
            "amount": {"value": f"{amount:.2f}", "currency": "USD"},
            "receiver": email,
            "note": "Congrats! You've earned this reward!",
            "sender_item_id": "item_001"
        }]
    })

    if payout.create():
        print(f"Payout successful! Sent ${amount} to {email}")
    else:
        print("Payout failed:", payout.error)from direct.gui.DirectGui import DirectButton

class FPSGame(ShowBase):
    def __init__(self):
        ShowBase.__init__(self)
        self.player_money = 0  

        # Create Cashout Button
        self.cashout_button = DirectButton(text="Cash Out", scale=0.07, pos=(0, 0, -0.8),
                                           command=self.cash_out, extraArgs=["player@example.com"])

    def cash_out(self, email):
        """Process payout if the player has enough balance."""
        if self.player_money >= 10:  # Minimum $10 cashout
            send_payout(email, self.player_money)
            self.player_money = 0
            self.money_text.setText(f"USD: ${self.player_money:.2f}")
        else:
            print("You need at least $10 to cash out!")pip install squareupfrom square.client import Client

# Square API Credentials (replace with actual keys)
square_client = Client(access_token="YOUR_SQUARE_ACCESS_TOKEN")

def send_cashapp_payout(cashapp_id, amount):
    """Send payout via Cash App."""
    body = {
        "idempotency_key": "unique_txn_id_001",
        "amount_money": {"amount": int(amount * 100), "currency": "USD"},
        "customer_id": cashapp_id,
        "note": "FPS Game Payout"
    }

    response = square_client.payments.create_payment(body)
    
    if response.is_success():
        print(f"Successfully sent ${amount} to Cash App ID {cashapp_id}")
    else:
        print("Cash App payout failed:", response.errors)pip install plaidfrom plaid import Client

# Plaid API Credentials
plaid_client = Client(client_id="YOUR_PLAID_CLIENT_ID",
                      secret="YOUR_PLAID_SECRET",
                      environment="sandbox")

def send_chime_payout(chime_account_id, amount):
    """Send payout via Chime (ACH Transfer)."""
    response = plaid_client.Transfer.create({
        "access_token": "YOUR_ACCESS_TOKEN",
        "account_id": chime_account_id,
        "amount": f"{amount:.2f}",
        "currency": "USD",
        "type": "credit",
        "network": "ach",
        "description": "FPS Game Payout"
    })

    if response["transfer"]["status"] == "pending":
        print(f"Payout of ${amount} to Chime Account {chime_account_id} initiated.")
    else:
        print("Chime payout failed:", response)class FPSGame(ShowBase):
    def __init__(self):
        ShowBase.__init__(self)
        self.player_money = 0  

        # Create buttons for different payout methods
        self.paypal_button = DirectButton(text="Cash Out via PayPal", scale=0.07, pos=(-0.5, 0, -0.8),
                                          command=self.cash_out, extraArgs=["paypal", "player@example.com"])

        self.cashapp_button = DirectButton(text="Cash Out via Cash App", scale=0.07, pos=(0, 0, -0.8),
                                           command=self.cash_out, extraArgs=["cashapp", "$PlayerTag"])

        self.chime_button = DirectButton(text="Cash Out via Chime", scale=0.07, pos=(0.5, 0, -0.8),
                                         command=self.cash_out, extraArgs=["chime", "chime_account_id"])

    def cash_out(self, method, account):
        """Process payout based on chosen method."""
        if self.player_money >= 10:
            if method == "paypal":
                send_payout(account, self.player_money)
            elif method == "cashapp":
                send_cashapp_payout(account, self.player_money)
            elif method == "chime":
                send_chime_payout(account, self.player_money)

            self.player_money = 0
            self.money_text.setText(f"USD: ${self.player_money:.2f}")
        else:
            print("You need at least $10 to cash out!")
