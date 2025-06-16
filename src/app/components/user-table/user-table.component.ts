import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ["name", "email", "phone", "companyName"]
  dataSource = new MatTableDataSource<User>([])
  isLoading = false
  error: string | null = null

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(): void {
    this.isLoading = true
    this.error = null

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users
        this.isLoading = false
      },
      error: (err) => {
        this.error = err.message
        this.isLoading = false
      },
    })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}




