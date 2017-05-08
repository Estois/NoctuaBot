# Noctua_Bot
Main functions: /feedback, /orderFood, /attendance, /aboutBot

## /feedback Function 
### Step 1:

	- Input: 	/feedback
	- Output: 	Is there anything particular you would like to feedback about? 
	- Keyboard:	'BOT Improvements' and 'General Feedback'
	
### Step 2:

	- Input: 	BOT Improvements
	- Output: 	Found a bug? Are we missing essential features? Have a suggestion for improvement? Let us know here!
	
	- Input: 	General Feedback
	- Output: 	Feel free to tell us anything you want us to know! 
				(2-linebreak) All responses will be kept private and confidential!
	
### Step 3:

	- Input: 	*User types in feedback*
	- Output: 	Feedback received! Would you like to submit another?
				(2-linebreak) When you're done, simply type /done to submit all your responses.

### Step 4: 

	- Input:	/done
	- Output: 	Thank you for your feedback! 
				(2-linebreak) If your feedback requires a response, we’ll get back to you soon!

*back to main interface*

## /orderFood Function
The main idea are summarised as follows:

	- Any user can start an order by PM-ing /orderFood to the bot
	- Bot will say on Group that an order has been started, together with the Order Details (place and time order close)
	- Users can add to the order list by PM-ing /orderFood --> /addOrder to the bot. 
	- When order is added, bot will repeat the Order Details, along with the number of orders so far (count), but not what people ordered. 
	- Therefore, orders added will be kept anonymous (people can order without hesistating or be nit-picky)
	- Additionally, users can PM /hungerCry to the bot, to anonymousely indicate that they want food, but haven’t started an order yet.
	- /hungerCry will be a simple counter function that will keep counting on the Main Group till someone eventually starts order. 
	- Increasing counter will have increasing intensity of message (like when Count=1: Is there anybody out there, but when Count=10: PLEASE SOMEONE START THE ORDER ALREADY IM STARVING)
	- When order has been started, bot will PM the order details to those who typed /hungerCry, so as to remind them to add their orders
	- Lastly, the orders and their respective owners will only be revealed when orders closed.




