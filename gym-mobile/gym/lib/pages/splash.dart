import 'package:flutter/material.dart';
import 'dart:async';
import 'profile.dart';
import 'mainscreen.dart';
class Splash extends StatefulWidget {
  const Splash({super.key});

  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  @override
  void initState() {
    super.initState();
    Timer(const Duration(seconds: 3), () {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(
          builder: (context) =>  Main(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Color.fromARGB(255, 179, 173, 173),
      body: Center(
        child: Text(
          "Splash",
          style: TextStyle(
            fontSize: 24.0,
            color: Colors.white,
            fontWeight: FontWeight.bold,
            shadows: [
              Shadow(
                color: Colors.black,
                blurRadius: 10.0,
                offset: Offset(0, 5.0),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
