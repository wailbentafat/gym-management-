import 'package:flutter/material.dart';

class Usesession extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Use Session"),
      ),
      body: Center(
        child: const Text(
          'This is the Use Session page',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}
