import 'package:flutter/material.dart';
import 'package:gym/pages/splash.dart';
import 'theme.dart';
import '../pages/profile.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'gym',
      theme: apptheme(),
      home: Splash(),
    );
  }
}
