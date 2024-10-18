import 'package:flutter/material.dart';
import 'package:gym/pages/splash.dart';
import 'theme.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'gym',
      theme: apptheme(),
      home: const Splash(),
    );
  }
}
