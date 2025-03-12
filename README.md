# Chat Application - Technical Test

This project is a chat application built using **React.js** and **Tailwind CSS**. It supports both **single chat** and **group chat** functionalities, with features like sending text messages, images, videos, and PDFs. Below is the documentation for each task.

---

## **Task 1: Create a Diagram for a Chatting System**

### **Objective**
Design a high-level system diagram for a chatting system that supports both **single chat** and **group chat**.

### **Key Components**
1. **Users**: Participants in the chat (e.g., Admin, Agent, Customer).
2. **Chat Rooms**: Can be single chat (between two users) or group chat (between multiple users).
3. **Messages**: Content sent by users in a chat room. Messages can be of different types (text, image, video, PDF).
4. **Participants**: Users who are part of a chat room.

### **Diagram**
![Chat System Diagram](#) *(You can add the diagram here later)*

---

## **Task 2: Create a Database Structure Using an Entity-Relationship Diagram (ERD)**

### **Objective**
Design a database structure for the chatting system using an **Entity-Relationship Diagram (ERD)**.

### **Entities**
1. **User**:
   - `user_id` (Primary Key)
   - `name`
   - `email`
   - `role`
2. **ChatRoom**:
   - `room_id` (Primary Key)
   - `name`
   - `type` (group/single)
   - `created_at`
3. **Message**:
   - `message_id` (Primary Key)
   - `type` (text, image, video, PDF)
   - `content`
   - `sender_id` (Foreign Key to User)
   - `room_id` (Foreign Key to ChatRoom)
   - `timestamp`
4. **Participant**:
   - `user_id` (Foreign Key to User)
   - `room_id` (Foreign Key to ChatRoom)

### **Relationships**
- A **User** can participate in many **ChatRooms** (Many-to-Many relationship, resolved by the `Participant` table).
- A **ChatRoom** can have many **Messages** (One-to-Many relationship).
- A **Message** belongs to one **ChatRoom** and is sent by one **User**.

### **ERD**
![ERD Diagram](#) *(You can add the ERD diagram here later)*

---

## **Task 3: Create a Chat Interface with a Responsive View**

### **Objective**
Build a chat interface using **React.js** and **Tailwind CSS** that displays messages from a provided JSON response. The interface should be **responsive** (work on both web and mobile).

### **Features**
1. **Sidebar**:
   - Displays a list of chat rooms.
   - Users can click a room to view its messages.
2. **Chat Room**:
   - Displays the room name, profile photo, and participant button.
   - Shows a list of messages.
   - Includes a text input and send button.
3. **Responsive Design**:
   - Works seamlessly on both desktop and mobile devices.

### **Technologies Used**
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **React Icons**: For icons like send, participants, and menu.

---

## **Task 4: Extend the JSON Format to Support Other Message Types**

### **Objective**
Extend the provided JSON format to include messages with **images**, **videos**, and **PDFs**.

### **Updated JSON Structure**
```json
{
  "results": [
    {
      "room": {
        "name": "Product A",
        "id": 12456,
        "image_url": "https://picsum.photos/id/237/200/300",
        "participant": [
          {
            "id": "admin@mail.com",
            "name": "Admin",
            "role": 0
          },
          {
            "id": "agent@mail.com",
            "name": "Agent A",
            "role": 1
          },
          {
            "id": "customer@mail.com",
            "name": "king customer",
            "role": 2
          }
        ]
      },
      "comments": [
        {
          "id": 885512,
          "type": "text",
          "message": "Selamat malam",
          "sender": "customer@mail.com"
        },
        {
          "id": 885513,
          "type": "text",
          "message": "Malam",
          "sender": "agent@mail.com"
        },
        {
          "id": 885514,
          "type": "image",
          "url": "https://picsum.photos/id/237/200/300",
          "caption": "This is a sample image",
          "sender": "customer@mail.com"
        },
        {
          "id": 885515,
          "type": "video",
          "url": "https://www.w3schools.com/html/mov_bbb.mp4",
          "thumbnail": "https://picsum.photos/id/238/200/300",
          "sender": "agent@mail.com"
        },
        {
          "id": 885516,
          "type": "pdf",
          "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "filename": "dummy.pdf",
          "sender": "customer@mail.com"
        }
      ]
    }
  ]
}
```

## **Task 5: Develop the Chat Page Interface to Display Messages with Images, Videos, or PDFs**

### **Objective**
Enhance the chat interface to display messages containing **images**, **videos**, or **PDFs** using the extended JSON format.

### **Features**
1. **Message Types**:
   - **Text**: Displayed as plain text.
   - **Image**: Displayed with an optional caption.
   - **Video**: Displayed with a thumbnail and controls.
   - **PDF**: Displayed as a downloadable link.
2. **Responsive Design**:
   - Works seamlessly on both desktop and mobile devices.
3. **Scrollable Message List**:
   - The message list is scrollable, with the newest messages visible first and the oldest messages hidden at the top.

### **Technologies Used**
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **React Icons**: For icons like send, participants, and menu.
