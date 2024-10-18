import 'package:flutter/material.dart';
import 'package:gym/pages/profile.dart';
import 'package:gym/pages/renewcon.dart';
import 'package:gym/pages/usesess.dart';
import 'package:gym/widgets/navbar.dart'; // Ensure this imports your CustomBottomNavigationBar

class Main extends StatefulWidget {
  @override
  _MainState createState() => _MainState();
}

class _MainState extends State<Main> {
  int _currentIndex = 0;
  final List<Widget> _pages = [
    Profile(),
    Renawcontract(),
    Usesession(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: CustomBottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}