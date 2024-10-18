import 'package:flutter/material.dart';

class Profile extends StatelessWidget {
  const Profile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profile'),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center, // Center the column
          children: <Widget>[
            CircleAvatar(
              radius: 50, // Increased radius for better visibility
              backgroundColor: Colors.blue,
              child: Text(
                'JD', // Initials or a placeholder text
                style: TextStyle(color: Colors.white, fontSize: 24),
              ),
            ),
            SizedBox(height: 20),
            Text(
              'Name: John Doe',
              style: TextStyle(fontSize: 18), // Added text style
            ),
            SizedBox(height: 20),
            Text(
              'Email: johndoe@example.com',
              style: TextStyle(fontSize: 18), // Added text style
            ),
          ],
        ),
      ),
    );
  }
}
