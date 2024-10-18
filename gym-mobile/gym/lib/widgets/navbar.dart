import 'package:flutter/material.dart';

class CustomBottomNavigationBar extends StatefulWidget {
  final int currentIndex;
  final Function(int) onTap;

  const CustomBottomNavigationBar({
    Key? key,
    required this.currentIndex,
    required this.onTap,
  }) : super(key: key);

  @override
  _CustomBottomNavigationBarState createState() => _CustomBottomNavigationBarState();
}

class _CustomBottomNavigationBarState extends State<CustomBottomNavigationBar> {
  @override
  Widget build(BuildContext context) {
    return BottomAppBar(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          IconButton(
            icon: Icon(
              Icons.home,
              color: widget.currentIndex == 0 ? Colors.blue : Colors.green,size:38,
            ),
            onPressed: () => widget.onTap(0),
          ),
          IconButton(
            icon: Icon(Icons.search, color: widget.currentIndex == 1? Colors.blue : Colors.green ,size:38 ,),
            onPressed: () => widget.onTap(1),
          ),
          IconButton(
             icon: Icon(Icons.autorenew, color: widget.currentIndex == 2? Colors.blue : Colors.green ,size:38,),
            onPressed: () => widget.onTap(2),
          ),

        ],
      ),
    );
  }
}
