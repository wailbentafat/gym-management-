import 'package:flutter/material.dart';

class Usesession extends StatelessWidget {
  const Usesession({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Renew Contract"),
      ),
      body: Container(
        padding: const EdgeInsets.all(16.0),
        child: const Column(
          mainAxisAlignment: MainAxisAlignment.start, 
          crossAxisAlignment: CrossAxisAlignment.start, 
          children: [
            Text(
              'Renew your contract',
              style: TextStyle(
                fontSize: 24.0,
                fontWeight: FontWeight.bold,
                color: Colors.black45,
              ),
            ),
            SizedBox(height: 16.0),
            Text(
              'Scan this QR code to renew your contract',
              style: TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
                color: Colors.black45,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
