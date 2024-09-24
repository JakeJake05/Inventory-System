﻿using InventorySystem.Models.DataEntities;
using InventorySystem.Models.Identities;
using Microsoft.EntityFrameworkCore;

namespace InventorySystem.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ItemCategory> ItemCategories { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            modelBuilder.Entity<Item>()
                .HasIndex(i => i.ItemCode)
                .IsUnique();

            modelBuilder.Entity<UserRole>()
                .HasKey(ur => new { ur.UserId, ur.RoleId });

            modelBuilder.Entity<UserRole>()
                .HasOne(ur => ur.User)
                .WithMany(u => u.UserRoles)
                .HasForeignKey(ur => ur.UserId);

            modelBuilder.Entity<UserRole>()
                .HasOne(ur => ur.Role)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(ur => ur.RoleId);

            modelBuilder.Entity<Role>().HasData(
                    new Role
                    {
                        RoleId = 1,
                        Name = "Administrator",
                        RoleDisplayName = "Admin"
                    },
                    new Role
                    {
                        RoleId = 2,
                        Name = "User",
                        RoleDisplayName = "User"
                    },
                    new Role
                    {
                        RoleId = 3,
                        Name = "Requester",
                        RoleDisplayName = "Requester"
                    }

                );

            modelBuilder.Entity<Category>().HasData(
                    new Category
                    {
                        CategoryId = 1,
                        Name = "Robots",
                        CategoryDisplayName = "Robots"
                    },
                    new Category
                    {
                        CategoryId = 2,
                        Name = "Books",
                        CategoryDisplayName = "Books"
                    },
                    new Category
                    {
                        CategoryId = 3,
                        Name = "Materials",
                        CategoryDisplayName = "Materials"
                    }


                );
        }
    }
}
