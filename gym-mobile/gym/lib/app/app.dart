import 'package:flutter/material.dart';
import 'theme.dart';
import '../pages/profile.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'gym',
      theme: apptheme(),
      home: profilepage(),
    );
  }
}
